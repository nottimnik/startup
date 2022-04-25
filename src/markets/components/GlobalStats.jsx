import React from "react";
import {
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

export default function GlobalStats() {
  return (
    <Flex>
      <Stat>
        <StatLabel fontSize="18px" fontWeight="700">
          Coins
        </StatLabel>
        <StatNumber>3800</StatNumber>
        <StatHelpText>Tracked</StatHelpText>
      </Stat>

      <Stat>
        <StatLabel fontSize="18px" fontWeight="700">
          Exchanges
        </StatLabel>
        <StatNumber>2000</StatNumber>
        <StatHelpText>Tracked</StatHelpText>
      </Stat>

      <Stat>
        <StatLabel fontSize="18px" fontWeight="700">
          Indexes
        </StatLabel>
        <StatNumber>29</StatNumber>
        <StatHelpText>Tracked</StatHelpText>
      </Stat>

      <Stat>
        <StatLabel fontSize="18px" fontWeight="700">
          Categories
        </StatLabel>
        <StatNumber>26</StatNumber>
        <StatHelpText>Available</StatHelpText>
      </Stat>
    </Flex>
  );
}
