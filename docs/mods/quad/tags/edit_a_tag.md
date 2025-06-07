---
title: Edit a Tag
---

# {{ $frontmatter.title }}

## Getting Started

The base functionality Quad supplies are controlled by item and block Tags. So, now the question is, "how do you edit a tag?" All of Quad's APIs are controlled with a datapack, which can be loaded by any vanilla or modded Minecraft world.

::: warning VERSIONS
Some Minecraft versions have different functionality defined in datapacks, and file or folder names can be different. So if something doesn't work, check you followed the correct structure for your selected Minecraft version.
:::

### Making a Datapack

#### TL;DR

If you are too lazy to read, here's a video you can watch about the steps on creating a datapack. Please look at these **TIPS** first.

::: tip TIPS
1. Use VSCode, and useful plugins.
2. Keep checking names of Files, Folders, and Data Values.
3. Try and read this Wiki as much as possible.
:::

<iframe width="100%" style="aspect-ratio: 16 / 9; border-radius: 8px" src="https://www.youtube.com/embed/E0BLq5Ll37c" title="Making a Datapack" frameborder="0" allowfullscreen />

::: warning
Note that if you do watch the video, you will _probably_ do more than what's needed. So please only go up to them making the `data` folder, which is about 3:10 into the video. After that point, go to [Structuring a Datapack](#structuring-a-datapack).
:::

#### My tutorial

So, we need to make a datapack. Every datapack starts as a folder, with another folder and 2 files contained within. This main folder can be named anything you want, usually the name of the datapack itself in kebab-case. (`this-would-be-your-datapack-name`).

The first file you will make is probably the most important file in a datapack, this is the file that will let minecraft find and load your datapack. If for some reason you do **_not_** see your datapack in the Minecraft menu, check there isn't a mistake with this file (like spelling mistakes, the file named wrong, or missing data). The file `pack.mcmeta` contains very little information, with it using JSON formatting, here you can put a description for your datapack, as well as defining the pack's "pack_format" version.

The latest version of Minecraft (as of writing this) is 1.21.5, which uses the "pack_format" of 71. For other Minecraft versions and what "pack_format" number they use, please check the [Minecraft Wiki](https://minecraft.wiki/w/Data_pack#Pack_format), it also includes any extra information like what each new "pack_format" added/changed.

```json [pack.mcmeta]
// COPY ME (and delete this line).
{
	"pack": {
		"description": "Some cool Datapack description, wow",
		"pack_format": 71
	}
}
```

The next file is an optional file, the `pack.png` which will act as a display image in the Minecraft menu. This image _needs_ to be a square to work properly in Minecraft, but it's purely visual and Minecraft doesn't care if it doesn't exist or what the image is.

### Structuring a Datapack

_Welcome back from the video._ 😄

Now we have the start of the datapack done, we need to talk about how we are going to structure this datapack to edit tags.

We will start with that last item in the main folder, a folder called `data/`, which will be placed with the `pack.mcmeta` and the `pack.png` (if you have one). So you should have these files and a data folder.

```
📂 <datapack-name>
├─ 📄 pack.mcmeta
├─ 📄 pack.png
└─ 📁 data
```

This `data` folder is where all the data of your datapack will be placed. Now in this `data` folder, you can make as many folders as you want, called whatever you want. These new folders are what will be the data's namespace, and are used at the base location for all the data related to a certain project (`<namespace>:<data>`). For example, all the Minecraft base datapack data is in the namespace of `minecraft`, so you could edit and override this data by making a folder `<datapack-name>/data/minecraft/`.

Normally, you would create a folder with your own unique namespace, however, with editing a Quad tags, you need to use the `quad` namespace (a tag would look like `quad:<tag-name>`), so create a folder called `quad` so you get `<datapack-name>/data/quad/`.

```
📂 <datapack-name>
├─ 📄 pack.mcmeta
├─ 📄 pack.png
└─ 📂 data
   ├─ 📁 quad
   └─ 📁 <your-namespace>
```

If you want to add your own namespace (we won't use this for tags, but it will be used for other data like `block_replacements`), then make another folder in `data`, and call it what you want.

::: tip NAMING
Keep the name of the namespace short, you need it to be memorable and easy to type, as it will be used for referencing other data (such as with a tag, `<your-namespace>:<tag-name>`).
:::

#### Big Shock

Tags are placed in the `tags` folder, 😱, under a namespace. And here is where it becomes different for newer versions. With 1.20.6 (well, 1.20.5), Minecraft changed how some of their folder names were, mostly making plural nouns singular (`tags/items` went to `tags/item`).

::: warning
The next folders and files we will be creating will be in the `data/quad` folder, if it is not in the folder, so if the features don't work, did you create the files in the `quad` namespace?
:::

So, the files in the `tags` folder, Quad uses 4 different types:

- Items /~/ Item
- Blocks /~/ Block
- Enchantments /~/ Enchantment
  - Removed in Quad with Minecraft 1.21+
- Structures /~/ Structure

::: code-group

```[~1.20.4]
📂 quad
└─ 📂 tags
   ├─ 📁 items
   ├─ 📁 blocks
   ├─ 📁 enchantments
   └─ 📂 worldgen
      └─ 📁 structures
```

```[1.20.6]
📂 quad
└─ 📂 tags
   ├─ 📁 item
   ├─ 📁 block
   ├─ 📁 enchantment
   └─ 📂 worldgen
      └─ 📁 structure
```

```[1.21+]
📂 quad
└─ 📂 tags
   ├─ 📁 item
   ├─ 📁 block
   └─ 📂 worldgen
      └─ 📁 structure
```

:::

::: danger
Please make sure you used the correct Minecraft version for the names.

Quad doesn't have any `enchantment(s)` tags with Minecraft 1.21+.
:::

## Finding a Tag

Minecraft uses tags everywhere, and there are a lot to look through and edit, so you will need to have an idea of what tag you need to edit and why you want to edit the tag. An example could be when making a mod that adds a new wood type, you would want to add to Minecraft's `minecraft:logs` item and block tags.

You can find the different tags Minecraft itself adds and uses on the [Minecraft Wiki](https://minecraft.wiki/w/Tag#List_of_tag_types) once again, it shows you the different tag types (vanilla) Minecraft has, and clicking on any of them will show a list of the built in ones and each of their uses.

Quad has its own list of its tags, [To Be Added](./edit_a_tag.md), where you can find a detailed list and explanation of the features and functions each tag has and where it is used.

### The Example

Continuing on with the tutorial, we will use an example tag to make things easier for me writing and explaining this. The tag we will be editing will be the Quad item tag `quad:snow/boots`, a simple tag that you can *easily* 🤨 follow along with, also I will call the datapack `example-pack`.

So with what we know, this is the current structure of the datapack (of course change it how you need) for Minecraft 1.21.5 (the current latest).

### Creating the File

```
📂 example-pack
├─ 📄 pack.mcmeta
├─ 📄 pack.png
└─ 📂 data
   └─ 📂 quad
      └─ 📂 tags
         └─ 📂 item
            └─ 📂 snow
               └─ 📄 boots.json
```

So many folders 😮‍💨, and notice how the tag file has the `JSON` file extension. If you create this with the file explorer (use VSCode), you will need to create a blank `TXT` file and replace the end with `.json`.

::: tip Spelling
You will **NOT** believe how many times I have made a spelling mistake and it breaks everything, so check everything, Files, Folders, and Data Values, and then do it all again.
:::

```json [quad:snow/boots.json]
{
	"replace": false,
	"values": []
}
```

After we have created the file, which you definitely used VSCode to do, we need to add some information to it as it is currently empty. As stated before, tags use the `JSON` format. The base of all tags is this above, with two important values:

- `replace`, this value isn't required, but when set to `false` it will mean the file will add onto the tag instead of completely replacing it. If this value was missing or set to `true` (the values default), only values in this specific file will be included in the tag, removing values that other packs have added (depending on the loading order). **More than likely**, you want this to be set to `false`.
- `values`, this value is required, its an array of all the values you want to add to the specified tag, as if the name wasn't a big clue. This is the most important value and the one you will edit and add to the most.

## Tag Values

### Understanding JSON

### NON-Required Values

## Testing the Datapack

## Extra Information
