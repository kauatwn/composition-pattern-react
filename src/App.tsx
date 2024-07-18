import { Check, Binary, X } from "lucide-react";
import { Notification } from "./components/Notification";
import { Widget } from "./components/Widget";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center px-2 dark:bg-zinc-700">
      <Widget.Root>
        <Widget.Header title="Notifications" label="Mark all as read" />
        <Widget.Group>
          <Widget.Content title="Recent">
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
            </Notification.Root>
          </Widget.Content>
          <Widget.Content title="Older">
            <Notification.Root>
              <Notification.Content text="You received an invitation" />
            </Notification.Root>
            <Notification.Root>
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
        </Widget.Group>
      </Widget.Root>
    </div>
  );
}

export default App;
