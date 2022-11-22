import React from 'react';
import './men.css';
import { AiFillHeart } from 'react-icons/ai';
import { TbHanger } from 'react-icons/tb';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { BiMessageAlt } from 'react-icons/bi';

import {
  Flex,
  Spacer,
  Box,
  Text,
  Button,
  Stack,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Checkbox,
  Input,
} from '@chakra-ui/react';
import Navbar from '../../Components/Navbar/Navbar';

const MenPage = () => {
  return (
    <div>
      <Navbar />
      <Stack spacing={'20px'} border="1px solid white" h="auto">
        <Flex spacing="10px">
          <Box ml="50px" h="700px" w="900px" mt="10px">
            <Image src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4016468/data/b0fbcd99aac1f3ef2f6552360e3f93cc/1x1_messaging-side/637/data.jpeg" />
          </Box>
          <Box
            h="700px"
            w="auto"
            border={'1px solid white'}
            mt="10px"
            mr="50px"
          >
            <Text fontSize="6xl" mt="100px" align={'center'}>
              22% OFF YOUR NEW <br /> WARDROBE
            </Text>

            <Text fontSize="2xl" mt="10px" align={'center'}>
              For limited time only, you can shop the world's most <br /> iconic
              brands with 22% off. Offer available on selected full-price items
            </Text>

            <Button
              borderRadius={'10px'}
              mt="50px"
              ml="300px"
              bg="whiteAlpha.100"
              border={'1px solid black'}
              px="40px"
              py="30px"
            >
              Shop Now
            </Button>
          </Box>
        </Flex>
      </Stack>

      <Stack spacing={'20px'} border="2px solid white" h="auto">
        <Flex spacing="10px">
          <Box ml="50px" h="700px" w="900px" mt="10px">
            <Text fontSize="6xl" mt="100px" align={'center'}>
              22% OFF YOUR NEW <br /> WARDROBE
            </Text>

            <Text fontSize="2xl" mt="10px" align={'center'}>
              For limited time only, you can shop the world's most <br /> iconic
              brands with 22% off. Offer available on selected full-price items
            </Text>

            <Button
              borderRadius={'10px'}
              mt="50px"
              ml="300px"
              bg="whiteAlpha.100"
              border={'1px solid black'}
              px="40px"
              py="30px"
            >
              Shop Now
            </Button>
          </Box>
          <Box
            h="700px"
            w="auto"
            border={'1px solid white'}
            mt="10px"
            mr="50px"
          >
            <Image src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043494/data/58e1561d985820f6ff52f3b45e321414/1x1_messaging-side/637/data.jpeg" />
          </Box>
        </Flex>
      </Stack>

      <Stack spacing={'20px'} border="2px solid white" h="auto">
        <Flex spacing="10px">
          <Box ml="50px" h="700px" w="900px" mt="10px">
            <Image src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4044254/data/59a98681fd23768264f5cf97e716c880/1x1_two-columns/624/data.jpeg" />

            <Box>
              <Text fontSize={'lg'} mt="20px">
                NEW GOLDEN GOOSE FOR YOUR GIFT LIST Explore the latest
                star-patched sneaker silhouettes, including the retro-inspired
                Ball Star and the refreshed Super-Star Sabot
              </Text>
            </Box>
          </Box>
          <Box></Box>
        </Flex>
      </Stack>

      <HStack mb="30px">
        <Flex>
          <Text fontSize={'3xl'} mt="50px" ml="40px">
            New in: handpicked daily from the world’s best brands and boutiques
          </Text>
          <Spacer />
          <Button
            borderRadius={'10px'}
            mt="50px"
            ml="450px"
            bg="whiteAlpha.100"
            border={'1px solid black'}
            px="30px"
            py="20px"
          >
            Shop Now
          </Button>
        </Flex>
      </HStack>

      <Stack>
        <Flex spacing="20px" gap={'20px'} p="20px">
          <Box h="500px" w="400px" border="1px solid black">
            <AiFillHeart style={{ marginLeft: '80%', fontSize: '40px' }} />
            <Image
              h="300px"
              w="100"
              src="https://cdn-images.farfetch-contents.com/19/10/05/61/19100561_42312996_600.jpg"
              alt=""
            />
            <Text color={'gray'} ml="20px" mt="10px">
              New Season
            </Text>
            <Text color={'black'} ml="20px" mt="10px" fontSize={'2xl'}>
              Gucci
            </Text>
            <Text color={'black.300'} ml="20px" mt="10px">
              GG-jacquard knitted
            </Text>

            <Text color={'black.200'} ml="20px" mt="10px">
              $920
            </Text>
          </Box>
          <Box h="500px" w="400px" border="1px solid black">
            <AiFillHeart style={{ marginLeft: '80%', fontSize: '40px' }} />
            <Image
              h="300px"
              w="100"
              src="https://cdn-images.farfetch-contents.com/19/30/34/91/19303491_42394849_1000.jpg"
              alt=""
            />
            <Text color={'gray'} ml="20px" mt="10px">
              New Season
            </Text>
            <Text color={'black'} ml="20px" mt="10px" fontSize={'2xl'}>
              Gucci
            </Text>
            <Text color={'black.300'} ml="20px" mt="10px">
              GG-jacquard knitted
            </Text>

            <Text color={'black.200'} ml="20px" mt="10px">
              $920
            </Text>
          </Box>
          <Box h="500px" w="400px" border="1px solid black">
            <AiFillHeart style={{ marginLeft: '80%', fontSize: '40px' }} />
            <Image
              h="300px"
              w="100"
              src="https://cdn-images.farfetch-contents.com/17/19/83/17/17198317_34908021_1000.jpg"
              alt=""
            />
            <Text color={'gray'} ml="20px" mt="10px">
              New Season
            </Text>
            <Text color={'black'} ml="20px" mt="10px" fontSize={'2xl'}>
              Gucci
            </Text>
            <Text color={'black.300'} ml="20px" mt="10px">
              GG-jacquard knitted
            </Text>

            <Text color={'black.200'} ml="20px" mt="10px">
              $920
            </Text>
          </Box>
          <Box h="500px" w="400px" border="1px solid black">
            <AiFillHeart style={{ marginLeft: '80%', fontSize: '40px' }} />
            <Image
              h="300px"
              w="100"
              src="https://cdn-images.farfetch-contents.com/19/08/45/25/19084525_42332023_1000.jpg"
              alt=""
            />
            <Text color={'gray'} ml="20px" mt="10px">
              New Season
            </Text>
            <Text color={'black'} ml="20px" mt="10px" fontSize={'2xl'}>
              Gucci
            </Text>
            <Text color={'black.300'} ml="20px" mt="10px">
              GG-jacquard knitted
            </Text>

            <Text color={'black.200'} ml="20px" mt="10px">
              $920
            </Text>
          </Box>
        </Flex>
      </Stack>

      <Stack>
        <Text fontSize={'5xl'} align="center">
          Shop gifts by category
        </Text>
        <Flex
          gap="20px"
          flexDirection={'row'}
          p="20px"
          alignItems={'center'}
          justifyContent="center"
        >
          <Box h="auto" w="400px" border={'2px solid white'}>
            <Image
              h="auto"
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3991024/data/7f859c5eaab84fa9bb83cb08dfedb11b/3x4_three-columns/480/data.jpeg"
              alt=""
            />

            <Text fontSize={'2xl'}>HIGH-GLAMOUR GIFTS</Text>
          </Box>
          <Box h="auto" w="400px" border={'2px solid white'}>
            <Image
              h="auto"
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4052052/data/e298d19a69bab1db35abc75874aeddbe/3x4_three-columns/480/data.jpeg"
              alt=""
            />

            <Text fontSize={'2xl'}>HIGH-GLAMOUR GIFTS</Text>
          </Box>
          <Box h="auto" w="400px" border={'2px solid white'}>
            <Image
              h="auto"
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4052018/data/f8dd60aa25869bc86bcd6408e669c3c5/3x4_three-columns/480/data.jpeg"
              alt=""
            />

            <Text fontSize={'2xl'}>HIGH-GLAMOUR GIFTS</Text>
          </Box>
        </Flex>
      </Stack>

      <HStack>
        <Flex>
          <Text fontSize={'3xl'} mt="50px" ml="40px">
            New in: handpicked daily from the world’s best brands and boutiques
          </Text>
          <Spacer />
          <Button
            borderRadius={'10px'}
            mt="50px"
            ml="450px"
            bg="whiteAlpha.100"
            border={'1px solid black'}
            px="30px"
            py="20px"
          >
            Shop Now
          </Button>
        </Flex>
      </HStack>

      <Stack>
        <Flex spacing="20px" gap={'20px'} p="20px">
          <Box h="500px" w="400px" border="1px solid black">
            <AiFillHeart style={{ marginLeft: '80%', fontSize: '40px' }} />
            <Image
              h="300px"
              w="100"
              src="https://cdn-images.farfetch-contents.com/19/10/05/61/19100561_42312996_600.jpg"
              alt=""
            />
            <Text color={'gray'} ml="20px" mt="10px">
              New Season
            </Text>
            <Text color={'black'} ml="20px" mt="10px" fontSize={'2xl'}>
              Gucci
            </Text>
            <Text color={'black.300'} ml="20px" mt="10px">
              GG-jacquard knitted
            </Text>

            <Text color={'black.200'} ml="20px" mt="10px">
              $920
            </Text>
          </Box>
          <Box h="500px" w="400px" border="1px solid black">
            <AiFillHeart style={{ marginLeft: '80%', fontSize: '40px' }} />
            <Image
              h="300px"
              w="100"
              src="https://cdn-images.farfetch-contents.com/18/12/56/34/18125634_38542895_1000.jpg"
              alt=""
            />
            <Text color={'gray'} ml="20px" mt="10px">
              New Season
            </Text>
            <Text color={'black'} ml="20px" mt="10px" fontSize={'2xl'}>
              Lanvin
            </Text>
            <Text color={'black.300'} ml="20px" mt="10px">
              Curb lace-up sneakers
            </Text>

            <Text color={'black.200'} ml="20px" mt="10px">
              $920
            </Text>
          </Box>
          <Box h="500px" w="400px" border="1px solid black">
            <AiFillHeart style={{ marginLeft: '80%', fontSize: '40px' }} />
            <Image
              h="300px"
              w="100"
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3983222/data/0a2e90aa1c737c47ec2f0c64f8f53b66/3x4_three-columns/480/data.jpeg"
              alt=""
            />
            <Text color={'gray'} ml="20px" mt="10px">
              New Season
            </Text>
            <Text color={'black'} ml="20px" mt="10px" fontSize={'2xl'}>
              Dino Lee
            </Text>
            <Text color={'black.300'} ml="20px" mt="10px">
              Jersey Rib corset T-shirt
            </Text>

            <Text color={'black.200'} ml="20px" mt="10px">
              $900
            </Text>
          </Box>
          <Box h="500px" w="400px" border="1px solid black">
            <AiFillHeart style={{ marginLeft: '80%', fontSize: '40px' }} />
            <Image
              h="300px"
              w="100"
              src="https://cdn-images.farfetch-contents.com/16/73/15/68/16731568_33244045_1000.jpg"
              alt=""
            />
            <Text color={'gray'} ml="20px" mt="10px">
              New Season
            </Text>
            <Text color={'black'} ml="20px" mt="10px" fontSize={'2xl'}>
              Monse
            </Text>
            <Text color={'black.300'} ml="20px" mt="10px">
              logo-trim cut-out leggings
            </Text>

            <Text color={'black.200'} ml="20px" mt="10px">
              $554
            </Text>
          </Box>
        </Flex>
      </Stack>

      <Stack>
        <Text fontSize={'5xl'} align="center">
          Shop gifts by category
        </Text>
        <Flex
          gap="20px"
          flexDirection={'row'}
          p="20px"
          alignItems={'center'}
          justifyContent="center"
        >
          <Box h="auto" w="400px" border={'2px solid black'}>
            <Image
              h="auto"
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3991066/data/614940ffe87c837d3c6205c092120b55/3x4_three-columns/480/data.jpeg"
              alt=""
            />

            <Text fontSize={'2xl'}>HOMEWARE TO LOVE</Text>
          </Box>
          <Box h="auto" w="400px" border={'2px solid black'}>
            <Image
              h="auto"
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3991112/data/912c9acde53cb60e750c36cd8cadd037/3x4_three-columns/480/data.jpeg"
              alt=""
            />

            <Text fontSize={'2xl'}>MODERN-FEMININITY GIFTS</Text>
          </Box>
          <Box h="auto" w="400px" border={'2px solid black'}>
            <Image
              h="auto"
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3983222/data/0a2e90aa1c737c47ec2f0c64f8f53b66/3x4_three-columns/480/data.jpeg"
              alt=""
            />

            <Text fontSize={'2xl'}>MOST-WANTED GIFTS</Text>
          </Box>
        </Flex>
      </Stack>

      {/* faq section */}

      <Stack mt="60px" mb="100px">
        <Flex gap="10px" alignItems={'center'} justifyContent="center">
          <Box h="200px" w="500px" border={'1px solid black'}>
            <TbHanger
              style={{
                fontSize: '40px',
                marginLeft: '10px',
                marginBottom: '20px',
                marginTop: '20px',
              }}
            />
            <Text fontSize={'xl'} mb="18px" ml="10px">
              HOW TO SHOP
            </Text>
            <Text fontSize={'lg'} ml="10px">
              Your guide to shopping and placing orders
            </Text>
          </Box>
          <Box h="200px" w="500px" border={'1px solid black'}>
            <AiFillQuestionCircle
              style={{
                fontSize: '40px',
                marginLeft: '10px',
                marginBottom: '20px',
                marginTop: '20px',
              }}
            />
            <Text fontSize={'xl'} mb="18px" ml="10px">
              HOW TO SHOP
            </Text>
            <Text fontSize={'lg'} ml="10px">
              Your guide to shopping and placing orders
            </Text>
          </Box>
          <Box h="200px" w="500px" border={'1px solid black'}>
            <BiMessageAlt
              style={{
                fontSize: '40px',
                marginLeft: '10px',
                marginBottom: '20px',
                marginTop: '20px',
              }}
            />
            <Text fontSize={'xl'} mb="18px" ml="10px">
              HOW TO SHOP
            </Text>
            <Text fontSize={'lg'} ml="10px">
              Your guide to shopping and placing orders
            </Text>
          </Box>
        </Flex>
      </Stack>

      <Stack>
        <Text align={'center'} fontSize="4xl" fontWeight={600}>
          GET 10% OFF YOUR FIRST ORDER
        </Text>

        <Text align={'center'} fontSize="lg" fontWeight={200}>
          Sign up for promotions, tailored new arrivals, stock <br /> updates
          and more – straight to your inbox
        </Text>

        <RadioGroup alignSelf={'center'}>
          <Stack
            direction="row"
            align={'center'}
            spacing={4}
            mt="30px"
            mb="30px"
          >
            <Radio size="lg" mr="40px" inable>
              Womenswear
            </Radio>
            <Radio size="lg" fontSize={'10px'}>
              Menswear
            </Radio>
          </Stack>
        </RadioGroup>
      </Stack>

      <Stack display={'block'} ml="500px">
        <Box height={'auto'} w="500px" border={'1px solid white'} ml="100px">
          <Text fontSize={'lg'}>GET UPDATES BY</Text>
          <Checkbox defaultChecked size="lg" mt="20px">
            Email
          </Checkbox>
          <Input
            placeholder="Your email address"
            size="lg"
            p="20px"
            py="30px"
            mt="20px"
          />

          <Checkbox size="lg" mt="30px" mb="30px">
            SMS
          </Checkbox>
          <Box h="50px" border={'1px solid black'} w="100">
            <Button
              size={'lg'}
              bg="black"
              color={'white'}
              px="44%"
              _hover={{
                background: 'gray',
                color: 'white',
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Stack>
      <Text align={'center'} fontSize="lg" mt="30px" ml="50px">
        By signing up, you agree to our Privacy Policy. <br /> Unsubscribe
        anytime at the bottom of our emails.
      </Text>
    </div>
  );
};

export default MenPage;
