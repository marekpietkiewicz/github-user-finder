import { useSelector } from "react-redux";
import type { StoreState } from "src/store";

export default function useSelectedUser() {
  const getSelectedUser = useSelector(
    (state: StoreState) => state.favorite.selectedUser
  );

  return { getSelectedUser };
}
