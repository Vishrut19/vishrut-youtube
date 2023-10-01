import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "News",
  "Lo-fi",
  "Podcasts",
  "Recently Uploaded",
  "New to you",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => {
        return <Button key={index} name={item}></Button>;
      })}
    </div>
  );
};

export default ButtonList;
