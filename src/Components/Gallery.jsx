import { useState, useEffect, useRef } from "react";
import { Tabs, Button, Spin } from "antd";
import axios from "axios";

const { TabPane } = Tabs;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  const limit = 9;

  const isMounted = useRef(false);

  const fetchImages = async (category, page) => {
    setLoading(true);
    const validPage = Math.max(1, page);
    try {
      const response = await axios.get("http://localhost:3000/gallery", {
        params: { category, page: validPage, limit },
      });
      console.log(response.data);
      setImages(response.data.images);
      setTotalPages(response.data.pagination.totalPages);
      setPage(response.data.pagination.currentPage);
      console.log(typeof page);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    fetchImages(category, page);
  }, [category, page]);

  const handleCategoryChange = (key) => {
    setCategory(key);
    setPage(1);
  };

  return (
    <div className="">
      <h1 className="text-4xl font-semibold text-center mb-5">Gallery</h1>

      <Tabs defaultActiveKey="all" onChange={handleCategoryChange} centered>
        <TabPane tab="all" key="all" />
        <TabPane tab="room" key="room" />
        <TabPane tab="gym" key="gym" />
        <TabPane tab="restaurant" key="restaurant" />
      </Tabs>

      <div className="max-w-[1200px] flex flex-col mx-auto justify-center">
        {loading ? (
          <div className="flex justify-center items-center">
            <Spin size="large" />
          </div>
        ) : images.length === 0 ? (
          <p className="mt-4 text-xl font-normal text-gray-600 ">
            No images available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
            {images.map((image) => (
              <img
                key={image._id}
                className="rounded-md h-72 object-cover"
                src={`http://localhost:3000${image.url}`}
                alt={image.description}
              />
            ))}
          </div>
        )}

        {parseInt(totalPages) > 1 && (
          <div className="flex justify-between p-5">
            <Button
              onClick={() => setPage(parseInt(page) - 1)}
              disabled={parseInt(page) === 1}
            >
              Previous
            </Button>
            <Button
              onClick={() => setPage(parseInt(page) + 1)}
              disabled={parseInt(page) === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
