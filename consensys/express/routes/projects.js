var data = require("../data-store");
var projects = data.getProjects();
var router = require("express").Router();

router.get("/", function (req, res, next) {
  res.json(projects.sort((a, b) => a.id - b.id));
});

router.get("/active", function (req, res, next) {
  res.json(
    projects.filter((project) => project.isActive).sort((a, b) => a.id - b.id)
  );
});

router.get("/:id", function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  const project = projects.find((project) => project.id === id);

  if (!project) {
    res.status(404);
    res.json({ message: "No Project Found" });
    return;
  }

  res.json(project);
});

module.exports = router;
