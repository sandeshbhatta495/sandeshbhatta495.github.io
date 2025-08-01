<<<<<<< HEAD
# sandeshbhatta495.github.io
=======
# My Portfolio

A personal portfolio website built with Flask, HTML, CSS, and JavaScript. Showcases projects, skills, certifications, and contact information.

## Features

- Animated hero section with Three.js particles
- Typewriter introduction effect
- Responsive navigation and layout
- Filterable skills and projects sections
- Certifications grid with details
- Contact form (AJAX submission)
- Modern, responsive design

## Project Structure

```
app.py
requirements.txt
.vscode/
    launch.json
static/
    css/
        style.css
    images/
        logos/
            deeplearning-ai-logo.png
            hp-life-logo.png
            linkedin-logo.png
            nrfc-logo.png
            riu-logo.png
    js/
        main.js
templates/
    index.html
```

## Getting Started

### Prerequisites

- Python 3.7+
- pip

### Installation

1. Clone the repository:

    ```sh
    git clone <your-repo-url>
    cd <project-directory>
    ```

2. Install dependencies:

    ```sh
    pip install -r requirements.txt
    ```

3. Run the Flask app:

    ```sh
    python app.py
    ```

4. Open your browser and go to [http://localhost:5000](http://localhost:5000)

### Development

- Static files (CSS, JS, images) are in the `static/` directory.
- Main HTML template is in `templates/index.html`.
- JavaScript logic is in `static/js/main.js`.
- Styles are in `static/css/style.css`.

### Customization

- Update your projects and certifications in `static/js/main.js`.
- Add or replace images in `static/images/logos/`.
- Edit content and sections in `templates/index.html`.

## Deployment

You can deploy this app using Gunicorn or any WSGI-compatible server. Example:

```sh
gunicorn app:app
```

## License

This project is for personal use and demonstration purposes.

---

**Author:** Sandesh Bhatta
>>>>>>> 618feab (adding for hosting)
