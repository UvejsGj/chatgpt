import "./homepage.css";
import { FiSun } from "react-icons/fi"
import { AiOutlineThunderbolt } from "react-icons/ai"
import { AiOutlineWarning } from "react-icons/ai"
import { BsTrash3 } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { FiExternalLink } from "react-icons/fi"
import { MdOutlineLogout } from "react-icons/md"
import { BsChatLeft } from "react-icons/bs"
import { BsSendFill } from "react-icons/bs"
 
function ChatGPT() {
    return (
      <>
      <div className="sidebar">
            <div className="newchat"> + New Chat  </div>
              <p> <BsChatLeft color="white" size={20}/> New Chat </p>
              <p> <BsChatLeft color="white" size={20}/> New Chat </p>
              <p> <BsChatLeft color="white" size={20}/> New Chat </p>
              <p> <BsChatLeft color="white" size={20}/> New Chat </p>
              <p> <BsChatLeft color="white" size={20}/> New Chat </p>
              <p> <BsChatLeft color="white" size={20}/> New Chat </p>
            <div className="bottom">
              <p> <BsTrash3 color="white" size={20}/> Clear conversations </p>
              <p> <CgProfile color="white" size={20} /> Upgrade to Plus <span className="new"> NEW </span> </p>
              <p> <FiSun color="white" size={20} /> Light Mode </p>
              <p> <FiExternalLink color="white" size={20} /> Updates & FFAQ </p>
              <p> <MdOutlineLogout color="white" size={20} /> Log Out </p>
            </div>
        </div>
      <div className="askchat"> 
        <input className="input" ></input> <BsSendFill className="sendlogo" color="grey" size={20}/>
        <p className="march" > ChatGPT Mar 14 Version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve. </p>
      </div>
      <div className="home">
            <h1>ChatGPT</h1>
            <div className="examples">
            <p>  <FiSun color="white" size={30}/> <br></br>  Examples </p>
                <p className="explain" > Explain quantum computing in simple terms. </p>
                <p className="creative"> Got any creative ideas for a 10 year olds birthday? </p>
                <p className="http">How do I make an HTTP request in Javascript?</p>
            </div>
            <div className="capabilities">
            <p>  <AiOutlineThunderbolt color="white" size={30}/> <br></br>  Capabilities </p>
                <p className="remember">Remembers what user said earlier in the conversation</p>
                <p className="allow">Allows user to provide follow-up corrections</p>
                <p className="trained">Trained to decline inappropriate requests</p>
           </div>
            <div className="limitations">
            <p>  <AiOutlineWarning color="white" size={30} /> <br></br>  Limitations </p>
                <p className="generate">May occasionally generate incorrect information</p>
                <p className="may">May occasionally produce harmful instructions or biased content</p>
                <p className="limited">Limited knowledge of world and events after 2021</p>
            </div>


      </div>
      </>
    );
  }
  
  export default ChatGPT;