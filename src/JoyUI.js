import * as React from 'react';
import {useState} from 'react';
import {Table, FormLabel, Stack, CardContent, AspectRatio, Skeleton, Modal, ModalClose, Sheet, FormControl, FormHelperText, Card, Button, IconButton, Box, Typography, Avatar, ListItemContent, ListItem, List, ListItemButton, ListItemDecorator} from '@mui/joy';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Autocomplete from '@mui/joy/Autocomplete';
import Tooltip from '@mui/joy/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Home from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';



const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];

export default function JoyUI() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = React.useState(true);
  return (
    <>
      <h3>JoyUI</h3>

      <Card variant="outlined" sx={{ width: 343 }}>
        <CardContent orientation="horizontal">
          <Skeleton animation="wave" variant="circular" width={48} height={48} />
          <div>
            <Skeleton animation="wave" variant="text" sx={{ width: 120 }} />
            <Skeleton
              animation="wave"
              variant="text"
              level="body-sm"
              sx={{ width: 200 }}
            />
          </div>
        </CardContent>
        <AspectRatio ratio="21/9">
          <Skeleton animation="wave" variant="overlay">
            <img
              alt=""
              src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            />
          </Skeleton>
        </AspectRatio>
        <Typography sx={{ overflow: 'hidden' }}>
          <Skeleton animation="wave">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and
            publishing industries.
          </Skeleton>
        </Typography>
        <Button>
          Read more
          <Skeleton animation="wave" />
        </Button>
      </Card>

      <Stack spacing={2} useFlexGap>
        <Card variant="outlined" sx={{ width: 343 }}>
          <AspectRatio ratio="21/9">
            <Skeleton loading={loading} variant="overlay">
              <img
                alt=""
                src={
                  loading
                    ? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                    : 'https://images.unsplash.com/photo-1686548812883-9d3777f4c137?h=400&fit=crop&auto=format&dpr=2'
                }
              />
            </Skeleton>
          </AspectRatio>
          <Typography>
            <Skeleton loading={loading}>
              {loading
                ? 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.'
                : 'An aerial view of a road in the middle of a forest. This image was uploaded by Dian Yu on Unsplash.'}
            </Skeleton>
          </Typography>
          <Button onClick={() => setLoading(!loading)}>
            {loading ? 'Stop' : 'Start'} loading
          </Button>
        </Card>
      </Stack>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: 'lg', mb: 1 }}
          >
            This is the modal title
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            Make sure to use <code>aria-labelledby</code> on the modal dialog with an
            optional <code>aria-describedby</code> attribute.
          </Typography>
        </Sheet>
      </Modal>

      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      
      <FormControl>
        <FormLabel>Label</FormLabel>
        <Autocomplete
          placeholder="Placeholder"
          options={top100Films}
          sx={{ width: 300 }}
        />
        <FormHelperText>A description for the combo box.</FormHelperText>
      </FormControl>

      <Autocomplete
        multiple
        sx={{ width: 300 }}
        size="sm"
        placeholder='size="sm"'
        options={top100Films}
        getOptionLabel={(option) => option.label}
        defaultValue={[top100Films[13]]}
      />
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="plain">Plain</Button>
      <ButtonGroup aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <IconButton>
          <Settings />
        </IconButton>
      </ButtonGroup>

      <Box sx={{ width: 320 }}>
        <Typography
          id="ellipsis-list-demo"
          level="body-xs"
          sx={{ textTransform: 'uppercase', letterSpacing: '0.15rem' }}
        >
          Inbox
        </Typography>
        <List
          aria-labelledby="ellipsis-list-demo"
          sx={{ '--ListItemDecorator-size': '56px' }}
        >
          <ListItem>
            <ListItemDecorator>
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-sm">Brunch this weekend?</Typography>
              <Typography level="body-sm" noWrap>
                I&apos;ll be in your neighborhood doing errands this Tuesday.
              </Typography>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Avatar src="/static/images/avatar/2.jpg" />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-sm">Summer BBQ</Typography>
              <Typography level="body-sm" noWrap>
                Wish I could come, but I&apos;m out of town this Friday.
              </Typography>
            </ListItemContent>
          </ListItem>
        </List>
      </Box>
      <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
            '& > *': { minWidth: 0, flexBasis: 200 },
          }}
        >
          {['sm', 'md', 'lg'].map((size) => (
            <div key={size}>
              <Typography level="body-xs" sx={{ mb: 2 }}>
                <code>size=&quot;{size}&quot;</code>
              </Typography>
              <List
                size={size}
                variant="outlined"
                sx={{ maxWidth: 300, borderRadius: 'sm' }}
              >
                <ListItem>
                  <ListItemButton>
                    <ListItemDecorator>
                      <Home />
                    </ListItemDecorator>
                    Home
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Projects</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Settings</ListItemButton>
                </ListItem>
              </List>
            </div>
          ))}
        </Box>
        <Table stripe="odd" hoverRow aria-label="basic table">
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Dessert (100g serving)</th>
            <th>Calories</th>
            <th>Fat&nbsp;(g)</th>
            <th>Carbs&nbsp;(g)</th>
            <th>Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frozen yoghurt</td>
            <td>159</td>
            <td>6</td>
            <td>24</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Ice cream sandwich</td>
            <td>237</td>
            <td>9</td>
            <td>37</td>
            <td>4.3</td>
          </tr>
          <tr>
            <td>Eclair</td>
            <td>262</td>
            <td>16</td>
            <td>24</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Cupcake</td>
            <td>305</td>
            <td>3.7</td>
            <td>67</td>
            <td>4.3</td>
          </tr>
          <tr>
            <td>Gingerbread</td>
            <td>356</td>
            <td>16</td>
            <td>49</td>
            <td>3.9</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
