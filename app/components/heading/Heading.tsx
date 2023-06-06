interface HeadingProps{
    title:string;
    subtitle?:string;
    center?:boolean;
}


function Heading({title,subtitle,center}:HeadingProps) {
  return (
    <div>{title}</div>
  )
}

export default Heading;
