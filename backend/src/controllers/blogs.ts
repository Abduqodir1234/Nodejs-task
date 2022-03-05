import create from "./blogs/create";
import Delete from "./blogs/delete";
import get from "./blogs/get";
import list from "./blogs/list";
import PersonalBlogs from "./blogs/personals";
import update from "./blogs/update";

export const blogCreate = create
export const blogsList = list
export const blogDelete = Delete
export const blogUpdate = update
export const personalBlogs = PersonalBlogs
export const blogGetById = get