import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCarById } from "../JS/actions/carActions";
import { Button } from "antd";
import { LeftOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import EditCar from "../components/EditCar";
import DeleteCar from "../components/DeleteCar";

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function CarDescription() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const {id} = useParams()

    const car = useSelector((state) => state.carReducer.car);

    const isLoading = useSelector((state) => state.carReducer.load);


    useEffect(() => {
      dispatch(getCarById(id))
    }, [dispatch, id])

    const features = [
      { name: "make", description: car.make },
      {
        name: "model",
        description: car.model,
      },
      { name: "fuel", description: car.fuel },
      {
        name: "year",
        description: car.year,
      },
      { name: "price", description: car.price },
      {
        name: "color",
        description: car.color,
      },
    ];
    
  return (
    <div className="bg-white min-h-screen">
      {!isLoading && (
        <>
          <div className="mx-auto px-4 md:px-16 mt-4 lg:px-24">
            <Button onClick={() => navigate(-1)} icon={<LeftOutlined />}>
              Back
            </Button>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-8 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Technical Specifications
              </h2>
              <p className="mt-4 text-gray-500">
                The walnut wood card tray is precision milled to perfectly fit a
                stack of Focus cards. The powder coated steel divider separates
                active cards from new ones, or can be used to archive important
                task lists.
              </p>
              <div className="flex gap-4 mt-4">
                <EditCar car={car} />
                <DeleteCar />
              </div>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <img
                alt={car.make}
                src={car.image}
                className="rounded-lg w-full bg-gray-100"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
