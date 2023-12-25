import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type ListFirestoreDTO = {
  item: string;
  quantity: string | number;
  cartItem: string;
  status: "to catch" | "caught";
  created_at: FirebaseFirestoreTypes.Timestamp;
  closed_at?: FirebaseFirestoreTypes.Timestamp;
};