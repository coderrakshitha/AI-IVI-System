import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home/Home";
import AllApps from "./screens/AllApps/AllApps";
import Music from "./screens/Music/Music";
import Navigation from "./screens/Navigation/Navigation";
import Phone from "./screens/Phone/Phone";
import Climate from "./screens/Climate/Climate";
import Radio from "./screens/Radio/Radio";
import Bluetooth from "./screens/Bluetooth/Bluetooth";
import Settings from "./screens/Settings/Settings";
import Vehicle from "./screens/Vehicle/Vehicle";
import Notifications from "./screens/Notifications/Notifications";
import Profile from "./screens/Profile/Profile";
import Media from "./screens/Media/Media";
import SystemInfo from "./screens/SystemInfo/SystemInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-apps" element={<AllApps />} />
        <Route path="/music" element={<Music />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/climate" element={<Climate />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/bluetooth" element={<Bluetooth />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/media" element={<Media />} />
        <Route path="/system-info" element={<SystemInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;