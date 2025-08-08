function Milestones({ props }) {
  var imgUrl = "";
  var divColor = "";
  switch (props.taskCategory) {
    case "motor":
      imgUrl = "/runningMan.png";
      divColor = "bg-blue-500";
      break;
    case "cognitive":
      imgUrl = "/brain.png";
      divColor = "bg-pink-500";
      break;
    case "social":
      imgUrl = "/social.png";
      divColor = "bg-green-500";
      break;
    case "language":
      imgUrl = "/speech.png";
      divColor = "bg-orange-500";
      break;
  }
  return (
    <div className="bg-gray-200 rounded-md p-2">
      <div className=" flex justify-between ">
        <div className="flex">
          {props.taskCompleted ? (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" className="fill-green-500" />
              <path
                d="M8 12L11 15L16 9"
                className="stroke-white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          <div className="flex flex-col pl-2">
            <h2 className="font-semibold">{props.title}</h2>
            <p className="text-sm text-gray-600">{props.subtitle}</p>
          </div>
        </div>
        <div className={`${divColor} rounded-xl px-3 h-7 flex items-center`}>
          <img src={imgUrl} alt="running man" className="h-5" />
        </div>
      </div>
      <div className="flex justify-between">
        <p className="pl-10 text-sm text-gray-500">{props.ageRange}</p>
        {props.taskCompleted ? (
          <p className="text-green-500">{props.completed}</p>
        ) : (
          <p className="text-green-500"> </p>
        )}
      </div>
    </div>
  );
}
export default Milestones;
