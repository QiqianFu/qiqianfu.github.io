/**
 * 图片优化和懒加载脚本
 */

document.addEventListener('DOMContentLoaded', function() {
    // 为所有项目图片添加加载事件
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach(function(img) {
        // 添加加载状态
        img.classList.add('lazy-image');
        
        // 图片加载完成后的处理
        img.addEventListener('load', function() {
            this.classList.add('loaded');
            this.closest('.project-image-container')?.classList.remove('image-loading');
        });
        
        // 图片加载失败的处理
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const container = this.closest('.project-image-container');
            if (container) {
                container.innerHTML = '<div style="text-align: center; color: #666; padding: 20px;">图片加载失败</div>';
            }
        });
        
        // 如果图片已经加载完成（缓存情况）
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            // 为未加载的图片添加加载动画
            img.closest('.project-image-container')?.classList.add('image-loading');
        }
    });
    
    // 添加图片点击放大功能（可选）
    projectImages.forEach(function(img) {
        img.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
        });
        
        // 添加鼠标悬停提示
        img.style.cursor = 'pointer';
        img.title = '点击查看大图';
    });
});

// 图片模态框功能
function openImageModal(src, alt) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    `;
    
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    // 点击关闭模态框
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // 按ESC键关闭
    const escHandler = function(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// 图片预加载功能
function preloadImages() {
    const imageUrls = [
        'img/textregion.png',
        // 可以添加其他需要预加载的图片
    ];
    
    imageUrls.forEach(function(url) {
        const img = new Image();
        img.src = url;
    });
}

// 页面加载完成后预加载图片
window.addEventListener('load', preloadImages); 