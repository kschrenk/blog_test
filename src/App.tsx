import { useEffect, useState } from "react";
import CategoryHighlights from "./components/CategoryHighlights";
import CategorySlider from "./components/CategorySlider";
import CategoryTopics from "./components/CategoryTopics";
import Navbar from "./components/Navbar";
import { useCategory } from "./store/category-context";

function App() {
  const [categories, setCategories] = useState<Categories | undefined>();
  const [search, setSearch] = useState<string>("");
  const { active } = useCategory();

  useEffect(() => {
    setTimeout(() => {
      return setCategories(data);
    }, 500);

    return;
  }, []);

  useEffect(() => {
    if (search !== "") console.log(search);
  }, [search]);

  return (
    <div className="App bg-gray-200">
      <div className="w-full max-w-md mx-auto bg-white">
        <Navbar search={search} setSearch={setSearch} />
        <main className="pb-12">
          <section>
            <div className="max-w-xs pt-4 pb-6 px-4">
              <h2 className="font-bold text-3xl text-left tracking-tight">
                Wissenswertes rund um's Tier in unserem Blog
              </h2>
            </div>
          </section>
          {categories ? (
            <>
              <section>
                <CategorySlider categories={categories} />
              </section>
              <section>
                <CategoryTopics category={categories[active]} />
              </section>
              <section>
                <CategoryHighlights category={categories[active]} />
              </section>
            </>
          ) : (
            <p>'Loading ...'</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;

const data = {
  cat: {
    label: "Katzen",
    url: "https://s3-alpha-sig.figma.com/img/e932/3171/0ce0d650fedb563710ef1dcc0590d861?Expires=1658102400&Signature=gzTos96Pr5Hu12unMOPlnelcQY1R4SdWSe1oFgz~0jIdgxJYX2BWuQAh597ULHsNQtqm5siXgJOoEUb4dLU59lCaufpbiRYQE-IGMDk4bUIrdahnqkEvyMLG0J6jSMwl~AYnCHJCcKIjL4EljnEnalIZT9Lo62xrs9e0JAnRbEybyMNkVCKhgY~5cBcgpr6BlmxfX7KA285CPfgPvQdmDfvNL0N3240X9Domoz8WrvEXZUaVvMXIFGXkk7c25YMp7V~1hhRGlBfJ2yNRjhNnnUbpIuqszDQG6NT~aglY7C3AFm1RZYaQHZCO82qw4oOjHBoBw7WLKxvki5gBJjR3XA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  dog: {
    label: "Hunde",
    url: "https://s3-alpha-sig.figma.com/img/abd6/56be/2a7ad83b9f064b4b6cd6e5f4da41d5b8?Expires=1658102400&Signature=e8p2Hkrd8Szy5On5DNv1R6EsanI8BC2kYgIYoJtnvY-cRKFxrMlBuFJjnt-0SHCHM-bgCrs1diraRUUKq7crtOQEX4SWlfReA4KW1MNWh~XqtNeU87zKNL5k6hQkaS1q-0UxEa12pp7IA-3jzVeuh2TeipiXQUiqGy79YZA3ABuBs~V23jKqYZeJ3eS1tPw-ZrjxP5AHI48gz4DOTSsHgifBCNnDPI6VnsMPZ-7XvmekAZ0lp4qTrgBpo3MmTLwQkBJJQIIW4SqGKwzno7Xo22QluTjo9j0HEez1uuSSD0fAMo1V0DDVhtgf9ix2TIylF3QrvnSd9snfVzc9w8UhIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    topicImg:
      "https://s3-alpha-sig.figma.com/img/eda3/d58e/3a0b0575fca94f4695555fb6724fc4d5?Expires=1658707200&Signature=BEGOCn8lN9fORzTIHaJ3OQceVldLd7C--d2PuCIQVaT2jflrp5n2sbhhaJRgyWi2pFUZZ8FfYZOvmFVpj~TYZUaTIDHS3Itf~XtQGdHD-ZEkuAVrcJQ3Uj35SmKDLPnjy4bykNYtpkP3FB7zQcy3Jylaq4~xvpBCJWQieY-x3M5Pi18ow5Hro21ZWKLl2m~yUwlyTjtz-wGiVzYxMPs1l0GY95V7yd2w8XCUX0~D9HKTfj20~hTuTuJ0goakTo3E78o7BA7iFUZjaGrKfg-puwcKx1X9LdEJ0zjYZl5TukgDniE1xQTJsXBYRNqEcFJtSoQTIKff7RAilyeKTzmr5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    topics: [
      {
        title: "Steckbriefe",
        img: "https://s3-alpha-sig.figma.com/img/c62c/f570/5935b277230e7d8b143167fc8afdc61d?Expires=1658707200&Signature=Dw3pqXnkyFhrT~TsvmQAAPYCvNv0LZsqcMycbkhrJP5rpbqBG2m0wvOP~1jawDxGkOIZr9XlEJB1KZ8f37LJ4rZUKiEmh0n1GmluH60yoez~5KW34gf14cZrffk2z~oyN3L-UHoQXRihrvmZJAG1DTeVf-DVN9~ItfOKqpEKxCRwl-hIE6zoZ1bMCXnvzqtd88SnSZAXluKTe4XRL1cBpJZHQT4KiKylcK4Z6KrUMHSSo2Gcmlhk9CQirqevR2KiVxbHDrngpucdOq03x~YEMzppRMTI4SETB~Uz246waQNy4Qm1f~bLBWKFUB-z2rOvC8NDEL9j49RF54gOnGlZCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      },
      {
        title: "Hunde-Erziehung",
        img: "https://s3-alpha-sig.figma.com/img/381f/fcda/4f77e42fed652552ecb84d936447ad49?Expires=1658707200&Signature=Vmqm-xnXh-OubjproHQSws0b1apHnJQZgHpgFiKnE4dD7Oew2OUvYNLJrrUmbA~mwvNVaGVfHQ9tYZQuzT09ae4hSu3Scr924e3wxwB~eYHZkKNBOvJEn14JI2vGgfCNn5ezrAan5AiS30bFGv8DG6Rz7gMQInmTuc8xw52tleouTpBdx1-IvEwQzUTKcoFX38b7ynhpupTkllNsJjTyrcHYvJg-vsoh5KSjY8U~9qIzf6skx-97x8fDIZLjZpPCN-eIJWXHE-Xnihs9ghjbOUpx9RGQZyCkOihPBJ67WLckptJF2UiIG79K70Nz0-LphF3hbjlWQUBr9VR8RVsNUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      },
      {
        title: "Hunde-Haltung",
        img: "https://s3-alpha-sig.figma.com/img/7488/fd16/a24e19d7f4cc4a913d13e742636f069d?Expires=1658707200&Signature=I1awbti7Xtnwq6EmYhWINfDwNYz5XlsM90cQAXat9YW9b4VraUkAL0~~nINcyArZ1wepQ~W~7PsNER6gQt2jUA-2SH0Hl9AbGRtRHcqKYob7QXYV3VRPjSu6NjGCSnmFhd3qh9Ci-2aE-mMlFZL4eduxBbH81r72enL5UvA3sKt9h8U0p2~02v-Z928RjtZIM45LItdv6Bm9rTEJRPiGEcnKduFsJ-hlo6EZ5VXeVjMydG4~f5bpy9r5gmARSETP3Vh0gAWdI~UpS~wIw1P1d7FloES~mQ9h~IgNHjOeFYwEg3SzGq7osZnE4xcUUFnoGdrpTtb~nCGYfhwmK6L3ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      },
      {
        title: "Gesundheit & Pflege",
        img: "https://s3-alpha-sig.figma.com/img/1ae3/4bc4/2896a96f56b571dbd5b5d175f813acbf?Expires=1658707200&Signature=BlvINJCuLnvrG5j08smXTLGa1CDS66vkFiuxCFjNm3Y7j44LSy4M227PEET59YbCsF-TIH3-8nG~0rFJFYcJQTs0EXFiIYC-zmfcujZX2A0HIQIqnC4KV3PApBCxBqI-LbFZ8mZpV7c4g~ptQKIx1MYVEC0jrkPin8w3OFK8bOEmYXqDgZbgjLtYRT7FVr7LnihapR~PZ1lB0JvMBEZ8JF4fVIzLppTSn~DftDmA10Af21Y1LGcVGWBI1j0q1kALiiLdjGdzJAxT4dBQK4Cc17VvOTsYAkO06E6QF6X2-GT4zkFp7vd~nrNjx0chA-TW2DzaRJSD19gAOYqFeMKPjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      },
    ],
    highlights: [
      {
        title: "Hund im Büro. So wird dein Hund zum Bürohund.",
        teaser: "Immer mehr Arbeitgeber erlauben...",
        img: "https://s3-alpha-sig.figma.com/img/38b8/f2fd/54afcf27bd25f1c0a4df89c40e00dee3?Expires=1658707200&Signature=P9adDF-~PjQiaGOUllIhnrgQynifG7swfIe2h0x1JcYeFgbkOHkwXOYodbY7aTAl~1tNjjUUx91ea2gmLW0~VrmCyA2bkEfVjoumIIABILOuiwG7hivzFcWG7sNxElppxu64jJJE7WPVE0NLAI7571pI3BRe78VcqWzpSQC99PNqCpMgVt-qMj8OVLPYHIaoUTg0VLm2zXAI6etmqmBT~ptC5g1rUHyNE5gPEpkvcQyHSgWbJUROpIYzzj5ZmIg3V8dwGjKUusKNoYXB2FDnMglw-txi~2lBYt240oMT4kvWxYEh3Nnyl1Dt5i~v0NS18LDsFsAlxXGrucysfcv1cQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      },
      {
        title: "Hund im Büro. So wird dein Hund zum Bürohund.",
        teaser: "Immer mehr Arbeitgeber erlauben...",
        img: "https://s3-alpha-sig.figma.com/img/3909/aae4/c63fdd467aa9bc02cc8f808d79f751a8?Expires=1658707200&Signature=MeOQ3a3lL5DHpEPZ9L5wULNbbKElEi2yYEwR0pE63-eGO9zRyypTys3fsdO2Tm1o8oc1kD991OK9aYsDk3L~CorNOo-3J0lpjgsw9NK3rRWe6evSHmOWQ-J-JeTt9KQim0VEDrF8LxddXs2EfB7rKlwZr92SafZjBbQG674zsUMYYV9zli8n-OYGrxhaC~DzdsDX53hvZp6kzbCOSy6ZzOeqYWJqfy6DIVYvuqx12n-BuR-SYbP8d6-IKrPiwMb4eUqMpZTeqxu09cDpneG9Gz73CSYzMuVQWw0B0s5oVFuwRAwqpuGeGCBE-LbiyM19xjYyjy9Xpfa-0uxqOc4Nhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      },
    ],
  },
  smallAnimals: {
    label: "Kleintiere",
    url: "https://s3-alpha-sig.figma.com/img/c9cc/3430/90db1fd87f4034a72873cc912397b80b?Expires=1658102400&Signature=BP-riIYOmFXVXpbV2Vzvm~ni-dY9ypCRVTW6NmMqz07ytyfmUCXxA3GTZ7ycrj6yjlmQqJhJqfYsRn-skHQN5pbmHDaMtFfc9fSz31wwzNxGTe3I6ZlV62SRl1E-uetNhXtzMK4jZbPsy0fJ1oQBUhkLo2niB8UBYsCQelwtwFhb5mjeRI3VDwO6cC2~vbyn24Z4RtSiB3VYLisjE~rGFVMWOYoKEJq41l2ITLrAras~qblkvPiaqmBesYzceKqFHMGrhPEDjs5GV1WfhtDg5r3Lf9FXZdYAvgjeSOijQ2snHPlc3uhkk5nodYmYwbNvkAmkmRzIXGGuvVTRqLIYZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  birds: {
    label: "Vögel",
    url: "https://s3-alpha-sig.figma.com/img/2a0c/7ca0/75857293024f0c2a8c38f10f19e5f172?Expires=1658102400&Signature=PkA2OsTOxj2uAWb7odEFJyH556vgLCk0LKrvdJtXCXAXOPJRTRtnjk5sleePqNhV51ZeqKGrwwqcp1iset6nQ0ysqffmFnKp3tC9xzmmh5RJ9CnlnghLIUEgeCr-fiq5oXxiT85ik8BjdMAnKOeCcFPG5fg-DWL2pR2P8gjA99ie1SChYGZ-MrOJ3ZTZK~xtO7iTTfZBCMkH15oVX3ttdSHmjmLP6SXxwmFVk-tza2hOTY7eW0i886GJ323xYP0wKFgF6~O~6FO2904WOfot0JtDRl-JoiD~2gTzG4mBwVQCjkl7QO4uiQi~hWUjFuOjYvT6UY7Y6qKH2lM5Y53JTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  freshwater: {
    label: "Süßwasser",
    url: "https://s3-alpha-sig.figma.com/img/e839/a4a8/26b4691bd5afb58cd2e7f35cd3506a6d?Expires=1658102400&Signature=WMck44O6uqTHu89snjwDE72W~dtgNLSxMkAIuTCYay-2Np-uB-MuiOCdEM-27uh27hWDNrnwedyQEa5p4MTeLG0tHATXvEiNw3DyPsifKm16fdc9Y7uP9osB6W5goO2US3weftl2JcIhKRGw8iLRb7lHJhfsalMvpxYpRtrRHrcteHsNloJsKRg0lTiBPv84PWjoWV6-KY-xdBGNiAs0xOw~ShqRgQ0BF-JyLIBvI8xShlyspr1PIpQJ3wJUWsE0hZ2XFEfgJy3ZZuj5OSmfFq5HMyqNp7tf2izsvxILer-wlbJAbhkJ8TKBzby8XwoYWc0puyOdi3aQI8HBvs378g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
};

export type Categories = {
  [key: string]: Category;
};

export type Category = {
  label: string;
  url: string;
  topics?: Topic[];
  topicImg?: string;
  highlights?: Highlight[];
};

export type Topic = {
  title: string;
  img: string;
};

export type Highlight = {
  title: string;
  teaser: string;
  img: string;
};
