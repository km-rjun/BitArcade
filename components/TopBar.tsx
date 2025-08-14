import "./TopBar.css"

export default function TopBar() {
    return(
        <div className="topbar">
            <div className="topbar-title">BitArcade</div>
            <input
            className="topbar-search"
            type="text"
            placeholder="Search..."
            />
            <button className="topbar-toggle">🌙</button>
        </div>
    )
}
