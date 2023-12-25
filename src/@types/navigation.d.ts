export declare global {
import NewList from '../screens/NewList';
    namespace ReactNavigation {
      interface RootParamList {
        SignIn: undefined;
        SignUp: undefined;
        Home: undefined;
        NewList: undefined;
        MyList: { listId: string };
      }
    }
  }