import Tag from "./Tag";

const Tags = ({hashtags, id}) => {
  console.log(hashtags);
  return (
    <div className="my-5">
        {
            hashtags.map(tag=><Tag key={id}></Tag>)
        }
    </div>
  );
};

export default Tags;
