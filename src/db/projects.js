import db from "./db";

export const addProject = async project => {
  const id = await db.table("projects")
    .add(project);

    return id;
};

export const removeProject = async id => {
  await db.table("projects")
    .delete(id);
  return true;
}