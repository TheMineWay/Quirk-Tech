import Carousel from "@/components/ui/carousel/carousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Carousel
        items={[
          {
            image:
              "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Demo image",
          },
        ]}
      />
    </div>
  );
}
