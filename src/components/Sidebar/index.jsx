import { Squares2X2Icon, UserGroupIcon, ChatBubbleLeftEllipsisIcon, InboxStackIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'

const Sidebar = () => {
    const menuItems = [
        {
            title: 'Teja',
            Icon: computer-desktop
        },
    {
        title: 'Dashboard',
        Icon: Squares2X2Icon
    },
    {
        title: 'Patients',
        Icon: UserGroupIcon
    },
    {
        title: 'Messages',
        Icon: ChatBubbleLeftEllipsisIcon
    },
    {
        title: 'Appointmnents',
        Icon: InboxStackIcon
    },
    {
        title: 'Transactions',
        Icon: ArrowsRightLeftIcon

    }];
    return (<>
        <div className='flex flex-col justify-center items-center'>
            {menuItems.map(menuItem => {
                return (<div className='flex'>
                    {menuItem.Icon && <menuItem.Icon className="size-6 text-blue-500"/>}
                        {menuItem.title}
                    </div>);
            })}
        </div>
    </>)
}

export default Sidebar;