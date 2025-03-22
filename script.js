// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
  // 在控制台打印消息
  console.log('页面已加载完成')

  // 获取当前年份并更新页脚版权信息
  const currentYear = new Date().getFullYear()
  const footerYear = document.querySelector('footer p')
  if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2023', currentYear)
  }

  // 导航栏交互
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')
  const navLinks = document.querySelectorAll('.nav-links li')

  // 汉堡菜单切换
  if (burger) {
    burger.addEventListener('click', () => {
      // 切换导航菜单
      nav.classList.toggle('nav-active')

      // 汉堡菜单动画
      burger.classList.toggle('toggle')

      // 链接动画
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ''
        } else {
          // 延迟每个链接的动画
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`
        }
      })
    })
  }

  // 滚动监听
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar')
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)'
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)'
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'
    }
  })

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // 减去导航栏高度
          behavior: 'smooth'
        })

        // 如果在移动设备上，点击后关闭菜单
        if (nav.classList.contains('nav-active')) {
          nav.classList.remove('nav-active')
          burger.classList.remove('toggle')
        }
      }
    })
  })

  // 更新页脚年份
  const yearElement = document.getElementById('current-year')
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }
})

// 表单提交
const contactForm = document.querySelector('.contact-form')
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault()

    // 获取表单数据
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    // 这里可以添加表单验证代码

    // 模拟表单提交
    alert(`谢谢您的留言，${name}！我们将尽快回复您。`)

    // 重置表单
    contactForm.reset()
  })
}

// 添加页面加载动画
window.addEventListener('load', () => {
  // 可以添加页面加载完成后的动画
  document.body.classList.add('loaded')
})
