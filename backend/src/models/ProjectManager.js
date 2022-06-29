const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (project_name) values (?)`,
      [project.project_name]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${ProjectManager.table} set project_name = ? where id = ?`,
      [project.project_name, project.id]
    );
  }
}

module.exports = ProjectManager;
