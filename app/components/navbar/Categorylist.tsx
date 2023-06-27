import { IconType } from "react-icons/lib"


interface CategorieslistProp {
    
    icon:IconType;
    label:string;
}
const Categorylist:React.FC<CategorieslistProp> = ({label,icon:Icon}) => {
  return (
    <div className="flex flex-col items-center">
    <Icon size={24}/>
    <div>{label}</div>

    </div>
  )
}

export default Categorylist