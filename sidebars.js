/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  bittensorSidebar: [
    "index",
    "whats-new-in-docs",
    {
      type: "category",
      label: "Concepts",
      collapsible: true,
      collapsed: false,
      items: [
        "concepts/introduction", 
        "concepts/bittensor-building-blocks",
        "concepts/anatomy-of-incentive-mechanism",
      ],
    },
    {
      type: "category",
      label: "Get Started",
      collapsible: true,
      collapsed: true,
      items: [
        "getting-started/installation", "getting-started/wallets",
      ],
    },
    {
      type: "category",
      label: "Subnets",
      collapsible: true,
      collapsed: false,
      items: [
        "subnets/registration", 
        "subnets/subnetworks",
        "subnets/code-walkthrough-text-prompting",
      ],
    },
    "mining/mining",
    "validating/validating",
    "clients/clients",
    "validating/yuma-consensus",
    "delegation/delegation",
    "governance/protocol",
    "governance/senate",
    "reference/testnet",
    "reference/btcli",
    "bittensor-api/index",
    "glossary/glossary",

  ],
};

module.exports = sidebars;
