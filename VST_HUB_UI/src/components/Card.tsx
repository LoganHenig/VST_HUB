import {Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image"

export default function VstCard() {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Cloud Audio</p>
        <small className="text-default-500">8.4/10 User Rating</small>
        <h4 className="font-bold text-large">Dynamic Compressor</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}