import { useState } from 'react';
import { Modal, Button, Divider, Stack, Radio, Checkbox, Text, Paper } from '@mantine/core';
import { CiSearch } from 'react-icons/ci'; // You can replace with another icon if needed

export const FILTER_GENDER_OPTIONS = ['STUDENT', 'PARENT', 'TEACHER', 'ALL'];
export const FILTER_CATEGORY_OPTIONS = ['All', 'Shose', 'Apparel', 'Accessories'];
export const FILTER_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];
export const FILTER_PRICE_OPTIONS = [
  { value: 'below', label: 'Below $25' },
  { value: 'between', label: 'Between $25 - $75' },
  { value: 'above', label: 'Above $75' },
];

export default function FilterSidebar({
  openFilter,
  onOpenFilter,
  onCloseFilter,
  rowsPerPage,
  setPageAfterFilter,
}) {
  const [selectedValue, setSelectedValue] = useState(FILTER_GENDER_OPTIONS[3]);

  const handleChange = (item) => {
    setSelectedValue(item);
    setPageAfterFilter(item);
    onCloseFilter();
  };

  return (
    <>
      <Button
        variant="outline"
        color="gray"
        onClick={onOpenFilter}
        rightIcon={<CiSearch />}
        className="w-[104px] h-7 bg-[#fcfcfc] rounded border border-neutral-300"
      >
        Filters
      </Button>

      <Modal
        opened={openFilter}
        onClose={onCloseFilter}
        title="Filters"
        size="lg"
        classNames={{ modal: 'p-0' }}
      >
        <Paper className="w-full h-full bg-gray-50 rounded-md border border-gray-300">
          <div className="p-4">
            <Stack spacing="md">
              <div>
                <Text weight={500} size="lg">Role</Text>
                <div className="mt-2">
                  {FILTER_GENDER_OPTIONS.map((item) => (
                    <div className="flex items-center" key={item}>
                      <Radio
                        checked={selectedValue === item}
                        onChange={() => handleChange(item)}
                        className="mr-2"
                      />
                      <Text>{item}</Text>
                    </div>
                  ))}
                </div>
              </div>

              {/* Uncomment and customize below sections if needed */}
              {/* 
              <div>
                <Text weight={500} size="lg">Category</Text>
                <div className="mt-2">
                  {FILTER_CATEGORY_OPTIONS.map((item) => (
                    <div className="flex items-center" key={item}>
                      <Radio className="mr-2" />
                      <Text>{item}</Text>
                    </div>
                  ))}
                </div>
              </div>
              */}

              {/* 
              <div>
                <Text weight={500} size="lg">Colors</Text>
                <div className="mt-2">
                  {/* Add color picker component here */}
                {/* </div>
              </div>
              */}

              {/* 
              <div>
                <Text weight={500} size="lg">Price</Text>
                <div className="mt-2">
                  {FILTER_PRICE_OPTIONS.map((item) => (
                    <div className="flex items-center" key={item.value}>
                      <Radio className="mr-2" />
                      <Text>{item.label}</Text>
                    </div>
                  ))}
                </div>
              </div>
              */}

              {/* 
              <div>
                <Text weight={500} size="lg">Rating</Text>
                <div className="mt-2">
                  {FILTER_RATING_OPTIONS.map((item, index) => (
                    <div className="flex items-center" key={item}>
                      <Radio className="mr-2" />
                      <Text>{item}</Text>
                    </div>
                  ))}
                </div>
              </div>
              */}
            </Stack>
          </div>

          <Divider />
          <div className="p-4">
            <Button
              fullWidth
              variant="outline"
              color="gray"
              onClick={onCloseFilter}
              className="text-gray-700"
            >
              Clear All
            </Button>
          </div>
        </Paper>
      </Modal>
    </>
  );
}
