const MyFuture = () => {
  return (
    <div className="page fade-in">
      <h1>Мій розвиток</h1>

      <section className="future-steps card">
        <h2>3 кроки в майбутнє:</h2>
        <ul className="steps-list">
          <li><strong>🚀 Опанувати Full-Stack:</strong> Поєднати знання React з потужним бекендом (C#) та базами даних (SQL, Oracle).</li>
          <li><strong>🌍 Англійська мова:</strong> Вивести ділову та технічну англійську на рівень, достатній для вільного спілкування в міжнародних командах.</li>
          <li><strong>💼 Старт кар'єри:</strong> Отримати позицію Software Engineer, застосовуючи знання на реальних комерційних проєктах.</li>
        </ul>
      </section>

      <section className="dream-job card">
        <h2>Робота мрії та цілі</h2>
        <p>Моя ідеальна робота — це місце, де я можу вирішувати складні архітектурні задачі та бачити реальний результат свого коду.</p>
        <p>А поза ІТ — успішно скласти іспити на категорію А/В та купити омріяний спортивний мотоцикл! 🏍️</p>
        
        <blockquote className="quote">
          "Єдиний спосіб робити велику роботу — любити те, що ти робиш." — Стів Джобс
        </blockquote>
      </section>
    </div>
  );
};

export default MyFuture;