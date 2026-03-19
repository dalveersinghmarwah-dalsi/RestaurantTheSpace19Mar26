import { describe, expect, it } from 'vitest';
import { ASSETS, VENUE_INFO, PRICING, CAPACITY, WHATS_INCLUDED, ADDONS, FAQ_DATA, EVENTS } from '../shared/constants';

describe('Website Constants and Data', () => {
  describe('Assets', () => {
    it('should have all required CDN URLs', () => {
      expect(ASSETS.logo).toBeDefined();
      expect(ASSETS.heroBg).toBeDefined();
      expect(ASSETS.theSpaceMain).toBeDefined();
      expect(ASSETS.theSpaceBelowMain).toBeDefined();
      expect(ASSETS.happeningsHeroBg).toBeDefined();
    });

    it('should have valid CDN URLs', () => {
      Object.values(ASSETS).forEach((url) => {
        expect(url).toMatch(/^https:\/\//);
        expect(url).toContain('cloudfront.net');
      });
    });
  });

  describe('Venue Info', () => {
    it('should have complete venue information', () => {
      expect(VENUE_INFO.name).toBe('The Space');
      expect(VENUE_INFO.address).toBeDefined();
      expect(VENUE_INFO.phone).toBeDefined();
      expect(VENUE_INFO.email).toBeDefined();
    });

    it('should have valid contact information', () => {
      expect(VENUE_INFO.phone).toMatch(/^\(\d{3}\)\s\d{3}-\d{4}$/);
      expect(VENUE_INFO.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('should have social media links', () => {
      expect(VENUE_INFO.social.instagram).toBeDefined();
      expect(VENUE_INFO.social.facebook).toBeDefined();
      expect(VENUE_INFO.social.linkedin).toBeDefined();
    });
  });

  describe('Pricing', () => {
    it('should have pricing for both spaces', () => {
      expect(PRICING.theSpace).toBeDefined();
      expect(PRICING.theSpaceBelow).toBeDefined();
    });

    it('should have weekend rates', () => {
      expect(PRICING.theSpace.weekend.rate).toBeGreaterThan(0);
      expect(PRICING.theSpaceBelow.weekend.rate).toBeGreaterThan(0);
      expect(PRICING.theSpace.weekend.rate).toBeGreaterThan(PRICING.theSpaceBelow.weekend.rate);
    });

    it('should have weekday rates', () => {
      expect(PRICING.theSpace.weekdayAfter5pm.rate).toBeGreaterThan(0);
      expect(PRICING.theSpace.weekdayBefore5pm.rate).toBeGreaterThan(0);
      expect(PRICING.theSpace.weekdayAfter5pm.rate).toBeGreaterThan(PRICING.theSpace.weekdayBefore5pm.rate);
    });

    it('should have hour minimums', () => {
      expect(PRICING.theSpace.minimums.fri_sat_sun).toBeGreaterThan(0);
      expect(PRICING.theSpace.minimums.mon_thurs).toBeGreaterThan(0);
      expect(PRICING.theSpace.minimums.fri_sat_sun).toBeGreaterThan(PRICING.theSpace.minimums.mon_thurs);
    });

    it('should have day rates', () => {
      expect(PRICING.theSpace.weekend.dayRate).toBeGreaterThan(0);
      expect(PRICING.theSpace.weekend.dayHours).toBe(10);
    });

    it('should have discount for The Space Below', () => {
      expect(PRICING.theSpaceBelow.discount).toContain('25%');
    });
  });

  describe('Capacity', () => {
    it('should have capacity for both spaces', () => {
      expect(CAPACITY.theSpace).toBeDefined();
      expect(CAPACITY.theSpaceBelow).toBeDefined();
    });

    it('should have standing and seated capacity', () => {
      expect(CAPACITY.theSpace.standing).toBeDefined();
      expect(CAPACITY.theSpace.seated).toBeDefined();
      expect(CAPACITY.theSpaceBelow.standing).toBeDefined();
      expect(CAPACITY.theSpaceBelow.seated).toBeDefined();
    });

    it('should have descriptions', () => {
      expect(CAPACITY.theSpace.description).toBeDefined();
      expect(CAPACITY.theSpaceBelow.description).toBeDefined();
    });
  });

  describe('What\'s Included', () => {
    it('should have furniture and amenities for both spaces', () => {
      expect(WHATS_INCLUDED.theSpace.furniture).toBeDefined();
      expect(WHATS_INCLUDED.theSpace.amenities).toBeDefined();
      expect(WHATS_INCLUDED.theSpaceBelow.furniture).toBeDefined();
      expect(WHATS_INCLUDED.theSpaceBelow.amenities).toBeDefined();
    });

    it('should have multiple furniture items', () => {
      expect(WHATS_INCLUDED.theSpace.furniture.length).toBeGreaterThan(0);
      expect(WHATS_INCLUDED.theSpaceBelow.furniture.length).toBeGreaterThan(0);
    });

    it('should have multiple amenities', () => {
      expect(WHATS_INCLUDED.theSpace.amenities.length).toBeGreaterThan(0);
      expect(WHATS_INCLUDED.theSpaceBelow.amenities.length).toBeGreaterThan(0);
    });
  });

  describe('Add-ons', () => {
    it('should have services', () => {
      expect(ADDONS.services.length).toBeGreaterThan(0);
      expect(ADDONS.services[0].name).toBeDefined();
      expect(ADDONS.services[0].price).toBeGreaterThan(0);
    });

    it('should have decor items', () => {
      expect(ADDONS.decor.length).toBeGreaterThan(0);
      expect(ADDONS.decor[0].name).toBeDefined();
      expect(ADDONS.decor[0].price).toBeGreaterThan(0);
    });

    it('should have furniture add-ons', () => {
      expect(ADDONS.furniture.length).toBeGreaterThan(0);
    });

    it('should have packages', () => {
      expect(ADDONS.packages.length).toBeGreaterThan(0);
      expect(ADDONS.packages[0].price).toBeGreaterThan(0);
    });
  });

  describe('FAQ Data', () => {
    it('should have multiple categories', () => {
      expect(FAQ_DATA.length).toBeGreaterThan(0);
    });

    it('should have required categories', () => {
      const categories = FAQ_DATA.map((cat) => cat.category);
      expect(categories).toContain('ALCOHOL');
      expect(categories).toContain('DECORATING');
      expect(categories).toContain('CATERING AND VENDORS');
      expect(categories).toContain('PRICING');
      expect(categories).toContain('SIZE');
      expect(categories).toContain('PARKING');
      expect(categories).toContain('MUSIC');
    });

    it('should have items in each category', () => {
      FAQ_DATA.forEach((category) => {
        expect(category.items.length).toBeGreaterThan(0);
        category.items.forEach((item) => {
          expect(item.question).toBeDefined();
          expect(item.answer).toBeDefined();
        });
      });
    });
  });

  describe('Events', () => {
    it('should have upcoming events', () => {
      expect(EVENTS.length).toBeGreaterThan(0);
    });

    it('should have complete event information', () => {
      EVENTS.forEach((event) => {
        expect(event.id).toBeDefined();
        expect(event.title).toBeDefined();
        expect(event.date).toBeDefined();
        expect(event.time).toBeDefined();
        expect(event.price).toBeGreaterThanOrEqual(0);
        expect(event.description).toBeDefined();
        expect(event.includes).toBeDefined();
      });
    });

    it('should have valid event prices', () => {
      EVENTS.forEach((event) => {
        expect(typeof event.price).toBe('number');
        expect(event.price).toBeGreaterThanOrEqual(0);
      });
    });
  });

  describe('Data Consistency', () => {
    it('should have consistent pricing between spaces', () => {
      // The Space Below should be cheaper than The Space
      expect(PRICING.theSpaceBelow.weekend.rate).toBeLessThan(PRICING.theSpace.weekend.rate);
      expect(PRICING.theSpaceBelow.friday.rate).toBeLessThan(PRICING.theSpace.friday.rate);
    });

    it('should have consistent capacity between spaces', () => {
      // The Space should have higher capacity than The Space Below
      expect(CAPACITY.theSpace.standing).toContain('60');
      expect(CAPACITY.theSpaceBelow.standing).toContain('40');
    });

    it('should have all add-ons with prices', () => {
      const allItems = [
        ...ADDONS.services,
        ...ADDONS.decor,
        ...ADDONS.packages,
      ];

      allItems.forEach((item) => {
        expect(item.price).toBeDefined();
        expect(typeof item.price).toBe('number');
      });
    });
  });
});
