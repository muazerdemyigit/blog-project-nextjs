
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import Link from "next/link";


const HomePage = () => {
    const postMetaData = getPostMetadata();
    const postPreviews = postMetaData.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));
    return <div className="grid grid-cols-1  md:grid-cols-2 gap-10">{postPreviews}</div>;
};
export default HomePage