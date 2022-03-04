const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Big Wall Climbing',
      description:
        'This time we take it to Yosemite National Park in Californy.',
      location: 'Yosemite National Park, California, USA',
      date: '2022-05-12',
      image: 'images/climb1.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Lead-climbing course',
      description:
        "Get your lead-climbing card and learn by the best instructors in Sweden in this 2 day course",
      location: 'Utby, Gothenburg, Sweden',
      date: '2022-06-25' && '2022-06-26',
      image: 'images/climb2.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Climbing Festival',
      description:
        'Join the yearly climbing festival in Lofoten, Norway. There will be hundreds of climbers showing off and hanging out on the rock. Lots of prices and giveaways promised',
      location: 'Lofoten, Norway',
      date: '2022-07-10' && '2022-07-11',
      image: 'images/climb4.jpg',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }