const articles = [
  {
    id: 1,
    title: "Introduction to Web Development",
    category: "Technology",
    content:
      "Web development is the process of creating websites and web applications using HTML, CSS and JavaScript."
  },

  {
    id: 2,
    title: "Why Education is Important",
    category: "Education",
    content:
      "Education helps us gain knowledge, develop skills and build a better future."
  },

  {
    id: 3,
    title: "Benefits of a Healthy Lifestyle",
    category: "Lifestyle",
    content:
      "A healthy lifestyle includes regular physical activity, nutritious food, enough sleep and good habits."
  },

  {
    id: 4,
    title: "Learning JavaScript",
    category: "Technology",
    content:
      "JavaScript makes websites interactive and dynamic. It is an important technology for modern web development."
  },

  {
    id: 5,
    title: "Tips for Better Study",
    category: "Education",
    content:
      "Create a study timetable, avoid distractions, take short breaks and revise your lessons regularly."
  },

  {
    id: 6,
    title: "Simple Daily Habits",
    category: "Lifestyle",
    content:
      "Small positive habits every day can improve productivity, confidence and overall well-being."
  }
];

function displayArticles(list) {
  const container = document.getElementById("articles");

  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>No articles found.</p>";
    return;
  }

  list.forEach(article => {
    container.innerHTML += `
      <div class="card">
        <span class="category">${article.category}</span>
        <h3>${article.title}</h3>
        <p>${article.content.substring(0, 100)}...</p>
        <button class="read-btn" onclick="openArticle(${article.id})">
          Read More
        </button>
      </div>
    `;
  });
}

function showHome() {
  displayArticles(articles);
}

function filterCategory(category) {
  const filtered = articles.filter(
    article => article.category === category
  );

  displayArticles(filtered);
}

function searchArticles() {
  const search =
    document.getElementById("searchInput").value.toLowerCase();

  const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(search) ||
    article.content.toLowerCase().includes(search)
  );

  displayArticles(filtered);
}

function openArticle(id) {
  const article = articles.find(article => article.id === id);

  document.getElementById("articles").innerHTML = `
    <div class="card">
      <span class="category">${article.category}</span>
      <h2>${article.title}</h2>
      <p>${article.content}</p>
      <button class="read-btn" onclick="showHome()">
        ← Back to Articles
      </button>
    </div>
  `;

  history.pushState({}, "", "?article=" + id);
}

displayArticles(articles);