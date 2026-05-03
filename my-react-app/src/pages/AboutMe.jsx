const AboutMe = () => {
  return (
    <div className="page fade-in">
      <h1>Про мене</h1>
      
      <section className="intro-section card">
        <h2>Хто я?</h2>
        <p>Привіт! Я студент спеціальності 122 "Комп'ютерні науки" в НУБіП (група КН-24002б). Захоплююсь розробкою ПЗ, проєктуванням баз даних та постійно вивчаю нові технології.</p>
        <p>Мої інтереси охоплюють як фронтенд (React), так і бекенд (C++, C#, SQL, Oracle). Також активно вдосконалюю свою технічну та бізнес-англійську.</p>
      </section>

      <section className="projects-section">
        <h2>Мої проєкти</h2>
        <div className="projects-grid">
          
          <div className="project-card">
            <h3>Бази даних / SQL</h3>
            <p>Проєктування БД: АРМ директора комп'ютерного сервісного центру. Робота з ідентифікаційними зв'язками.</p>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn">Дивитись репозиторій</a>
          </div>

          <div className="project-card">
  <h3>Web-проєкт "Tra-ta-ta"</h3>
  <p>Спільна розробка разом із Санею. Застосування навичок веб-програмування на практиці та робота в команді.</p>
  <a href="https://immortallsoul.github.io/Tra-ta-ta/" target="_blank" rel="noreferrer" className="btn">Дивитись проєкт</a>
</div>

          <div className="project-card">
            <h3>React SPA</h3>
            <p>Це портфоліо! Створене з використанням React Router, Hooks та API.</p>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn">Дивитись репозиторій</a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutMe;