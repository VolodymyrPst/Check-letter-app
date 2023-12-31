import { Todo, LinksPath } from '../Types/Todo';

export const filterTodos = (items: Todo[], filterBy: string) => {
  if (filterBy === LinksPath.All) {
    return items;
  }

  return items.filter(({ completed }) => {
    switch (filterBy) {
      case LinksPath.Active:
        return completed === false;

      case LinksPath.Completed:
        return completed === true;

      default:
        return false;
    }
  });
};
