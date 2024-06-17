/* Global styles */
body {
  font-family: Arial, sans-serif;
  background-color: #ffee58; /* Golden yellow */
  color: #000; /* Black */
  margin: 0;
  padding: 0;
}

header {
  background-color: #000; /* Black */
  color: #ffee58; /* Golden yellow */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

nav ul {
  list-style-type: none;
  display: flex;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  color: #ffee58; /* Golden yellow */
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}

main {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.post-form {
  margin-bottom: 20px;
}

.post-form h2 {
  margin-bottom: 10px;
}

#buzzFeed {
  /* Styles for buzzes (posts) */
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #000; /* Black */
  color: #ffee58; /* Golden yellow */
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

/* Responsive styles */
@media (max-width: 600px) {
  header {
    flex-direction: column;
    align-items: center;
  }

  .logo {
    margin-bottom: 10px;
  }

  nav ul {
    flex-direction: column;
    margin-top: 10px;
  }

  nav ul li {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
