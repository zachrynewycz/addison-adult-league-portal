import AuthCheck from "../components/Shared/AuthCheck";

const sheetUrls: any = {
    1: "https://docs.google.com/spreadsheets/d/1tcbD3qRJCHumUG1bJyTG-kFj1fGpsqAo0woHA7D8XSs/edit#gid=177012313",
    2: "https://docs.google.com/spreadsheets/d/1iasULSeLtn814Lf9BDFpXh_i5FX5kultatfC9N7HFkE/edit#gid=177012313",
    3: "https://docs.google.com/spreadsheets/d/1tBxXRPcj_0KJyFkQ6btqGDMNYuBC3JhDZyIakqeypII/edit#gid=177012313",
};

const EditBracketButton = ({ division }: { division: number }) => {
    const handleClick = () => {
        window.open(sheetUrls[division], "_blank");
    };

    return (
        <AuthCheck>
            <button className="toolbar-btn" onClick={handleClick}>
                Edit bracket <img src="icons/git-pull-request.svg" alt="bracket-edit" />
            </button>
        </AuthCheck>
    );
};

export default EditBracketButton;
