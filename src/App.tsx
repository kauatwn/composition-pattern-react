import { Check, Binary, X } from "lucide-react";
import { Notification } from "./components/Notification";
import { Widget } from "./components/Widget";

function App() {
  return (
    <>
      <Widget.Root>
        <Widget.Header title="Notifications" label="Mark all as read" />
        <Widget.Content title="Recent">
          {/* Recent notifications section */}
          <Notification.Root>
            <Notification.Icon icon={Binary} />
            <Notification.Content text="You received an invitation" />
            <Notification.Actions>
              <Notification.Action icon={X} />
              <Notification.Action
                icon={Check}
                className="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
              />
            </Notification.Actions>
          </Notification.Root>
          <Notification.Root>
            <Notification.Icon icon={Binary} />
            <Notification.Content text="You received an invitation" />
            <Notification.Actions>
              <Notification.Action icon={X} />
              <Notification.Action
                icon={Check}
                className="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
              />
            </Notification.Actions>
          </Notification.Root>
        </Widget.Content>
        <Widget.Content title="Older">
          {/* Older notifications section */}
          <Notification.Root>
            <Notification.Icon icon={Binary} />
            <Notification.Content text="You received an invitation" />
            <Notification.Actions>
              <Notification.Action icon={X} />
              <Notification.Action
                icon={Check}
                className="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
              />
            </Notification.Actions>
          </Notification.Root>
          <Notification.Root>
            <Notification.Icon icon={Binary} />
            <Notification.Content text="You received an invitation" />
            <Notification.Actions>
              <Notification.Action icon={X} />
              <Notification.Action
                icon={Check}
                className="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
              />
            </Notification.Actions>
          </Notification.Root>
          <Notification.Root>
            <Notification.Icon icon={Binary} />
            <Notification.Content text="You received an invitation" />
            <Notification.Actions>
              <Notification.Action icon={X} />
              <Notification.Action
                icon={Check}
                className="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
              />
            </Notification.Actions>
          </Notification.Root>
        </Widget.Content>
      </Widget.Root>
    </>
  );
}

export default App;
