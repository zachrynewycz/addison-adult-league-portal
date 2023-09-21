const sheetUrls: any = {
    1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT-RU9Wm6NmSRHt51S-iV-9I8RhAGSGZxJAftvrzq9rf6ti1bEhMHi4mIWvf6UCxulnBxSryqGGlUJq/pubhtml",
    2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTzpvxv1SJoWYBFY-D3KiJ_KmO47DjWxHD-_3k0okJY3_Vld8XXwHZh_aYdXNTNJRG6PqfrjGxMIhlG/pubhtml",
    3: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEgnARwIGPlx-PW3NMgi5s-DQbbXrLk7jFN6fnwlUsqJRwsYNpUd7--qO646JGSgpFe2wMTMJQ0YJd/pubhtml",
} as const;

const GoogleSheetFrame = ({ division }: { division: number }) => {
    return <iframe className="w-full h-[700px] mt-10" src={sheetUrls[division]} />;
};

export default GoogleSheetFrame;
