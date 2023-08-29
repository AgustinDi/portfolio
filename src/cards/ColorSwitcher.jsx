import './Cards Styles/ColorSwitcher.css'

export default function ColorSwitcher() {
     return (
          <div className="ColorSwitcher">
               <label className="ColorSwitcher_switch">
                    <input type="checkbox" />
                    <span className="ColorSwitcher_slider"></span>
               </label>
          </div>
     )
}
