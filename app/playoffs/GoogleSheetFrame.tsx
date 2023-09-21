type SheetUrls = {
    [key: number]: string;
};

const sheetUrls: SheetUrls = {
    1: "https://docs.google.com/spreadsheets/d/1tcbD3qRJCHumUG1bJyTG-kFj1fGpsqAo0woHA7D8XSs/edit?usp=sharing",
    2: "https://docs.google.com/spreadsheets/d/1iasULSeLtn814Lf9BDFpXh_i5FX5kultatfC9N7HFkE/edit?usp=sharing",
    3: "https://docs.google.com/spreadsheets/d/1tBxXRPcj_0KJyFkQ6btqGDMNYuBC3JhDZyIakqeypII/edit?usp=sharing",
};

const GoogleSheetFrame = ({ division }: { division: number }) => {
    return <iframe src={sheetUrls[division]} />;
};

export default GoogleSheetFrame;
