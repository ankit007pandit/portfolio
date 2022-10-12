import './Skills.scss'
import { useEffect, useState } from "react";
import SkillsList from "../skillslist/SkillsList";
import {WebDevelopment,DesignTools,DevStack,Frameworks,BuildToolsEditor} from "../../constant data/Skillsdata"

export default function Skills() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
      {
        id: "WebDevelopment",
        title: "Web Development",
      },
      {
        id: "DesignTools",
        title: "Design Tools",
      },
      {
        id: "DevStack",
        title: "Dev Stack",
      },
      {
        id: "Frameworks",
        title: "Frame Works",
      },
      {
        id: "BuildToolsEditor",
        title: "BuildTools & Editor",
      },
    ];
  
    useEffect(() => {
      switch (selected) {
        case "WebDevelopment":
          setData(WebDevelopment);
          break;
        case "DesignTools":
          setData(DesignTools);
          break;
        case "DevStack":
          setData(DevStack);
          break;
        case "Frameworks":
          setData(Frameworks);
          break;
        case "BuildToolsEditor":
          setData(BuildToolsEditor);
          break;
        default:
          setData(WebDevelopment);
      }
    }, [selected]);
    return (
        <div className="skills" id="skills">
           <h1>Skills</h1>
      <ul>
        {list.map((item) => (
          <SkillsList key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
        </div>
    )
}
