export const Notifications = async () => {

  await new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <div>Notifications</div>
  )
}

export default Notifications;