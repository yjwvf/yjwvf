document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarNav = document.getElementById('navbarNav');
    const scrollTop = document.getElementById('scrollTop');
    const switcherTrigger = document.getElementById('switcherTrigger');
    const colorSwitcher = document.getElementById('colorSwitcher');
    const colorOptions = document.querySelectorAll('.color-option');

    navbarToggle.addEventListener('click', function() {
        navbarNav.classList.toggle('show');
    });

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    });

    scrollTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    switcherTrigger.addEventListener('click', function() {
        colorSwitcher.classList.toggle('show');
    });

    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            changeThemeColor(color);
            
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });

    function changeThemeColor(color) {
        const colors = {
            blue: '#007bff',
            green: '#28a745',
            indigo: '#6610f2',
            orange: '#fd7e14',
            black: '#343a40',
            red: '#dc3545',
            teal: '#20c997',
            cyan: '#17a2b8',
            purple: '#6f42c1',
            pink: '#e83e8c'
        };

        const selectedColor = colors[color];
        if (selectedColor) {
            document.documentElement.style.setProperty('--primary-color', selectedColor);
        }
    }

    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    navbarNav.classList.remove('show');
                }
            }
        });
    });

    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h5').textContent;
            //alert(`您点击了 ${title} 服务卡片！`);
        });
    });

    const pricingButtons = document.querySelectorAll('.pricing-card .btn');
    pricingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.pricing-card');
            const planName = card.querySelector('h4').textContent;
            const price = card.querySelector('h3').textContent;
            
            alert(`感谢您对 ${planName} (${price}) 的兴趣！\n\n请联系我们：\n热线/微信 15112436042`);
        });
    });

    const contactButtons = document.querySelectorAll('.contact-section .btn');
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert(`立即联系我们！\n\n热线/微信：15112436042\n邮箱：zhangcheng@tianchenginfo.com`);
        });
    });

    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const title = this.getAttribute('title');
            //alert(`您点击了 ${title} 社交媒体链接！`);
        });
    });

    const footerLinks = document.querySelectorAll('.footer-section ul li a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent;
            //alert(`您点击了 ${text} 产品链接！`);
        });
    });

    const pressItems = document.querySelectorAll('.press-item');
    pressItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const alt = img.getAttribute('alt');
            //alert(`您点击了 ${alt} 合作平台！`);
        });
    });

    const caseLogos = document.querySelectorAll('.case-logo');
    caseLogos.forEach(logo => {
        logo.addEventListener('click', function() {
            //alert('查看成功案例详情！');
        });
    });

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const title = this.querySelector('h6').textContent;
            const content = this.querySelector('p').textContent;
           // alert(`${title}\n\n${content}`);
        });
    });

    document.addEventListener('click', function(e) {
        if (!colorSwitcher.contains(e.target) && !switcherTrigger.contains(e.target)) {
            colorSwitcher.classList.remove('show');
        }
    });

    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const ctaButtons = document.querySelectorAll('.cta-section .btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('立即咨询 ShopPro 海外商城解决方案！\n\n热线/微信：15112436042');
        });
    });

    const snsButtons = document.querySelectorAll('.sns-section .btn');
    snsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('立即咨询社交媒体营销解决方案！\n\n热线/微信：15112436042');
        });
    });

    console.log('天成®全球推广网站已加载完成！');
    console.log('联系方式：热线/微信 15112436042');
    console.log('邮箱：zhangcheng@tianchenginfo.com');
});