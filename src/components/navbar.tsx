const Nav = () => {

    return (
        <div data-name="navbar" className="w-full bg-inherit inline-grid grid-cols-[max-content_1fr_max-content] px-4 items-center">
            <div className="max-h-max text-start"></div>
            <div className="max-h-max text-center whitespace-nowrap">
                <h1 className="text-3xl font-extrabold text-foreground">App Name</h1>
            </div>
            <div className="max-h-max text-end"></div>
        </div>
    )
};

export default Nav;
