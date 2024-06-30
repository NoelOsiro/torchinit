import Link from 'next/link';

const Page = () => {
    // Example data for cards
    const cards = [
        { id: 1, title: 'banner', description: 'Manage banners and promotional content.' },
        { id: 2, title: 'banner2', description: 'View and edit secondary banners.' },
        { id: 3, title: 'hero', description: 'Edit hero sections and featured content.' },
        { id: 4, title: 'value', description: 'Manage core organizational values.' },
        { id: 5, title: 'benefits', description: 'View employee benefits and policies.' },
        { id: 6, title: 'approaches', description: 'Explore different approaches and strategies.' },
        { id: 7, title: 'team', description: 'Manage team members and roles.' },
        { id: 8, title: 'community', description: 'Engage with community events and initiatives.' },
    ];

    return (
        <div id="main-content" className="h-screen w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main>
                <div className="pt-6 px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {cards.map((card) => (
                            <Link key={card.id} href={`/admin/${card.title}`}>
                                    <div className="bg-white text-center rounded-lg shadow-lg p-6 h-48 cursor-pointer transition duration-300 hover:shadow-xl">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h3>
                                        <p className="text-gray-600">{card.description}</p>
                                    </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Page;
