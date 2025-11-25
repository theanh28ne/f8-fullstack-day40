import Loading from "../../component/Loading";
import { useFetchUsers } from "../../services/user";

import Card from "./card";

const UsersList = () => {
  const { isLoading, users } = useFetchUsers();

  return (
    <div className="m-5">
      <ul className="flex flex-wrap gap-4">
        {isLoading ? (
          <Loading />
        ) : (
          users.map((user) => {
            return (
              <Card
                key={user.id}
                name={user.name}
                phone={user.phone}
                email={user.email}
                website={user.website}
              />
            );
          })
        )}
      </ul>
    </div>
  );
};
export default UsersList;
