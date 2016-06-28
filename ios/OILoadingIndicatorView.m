#import "OILoadingIndicatorView.h"

@interface OILoadingIndicatorView ()

@property (nonatomic, strong) UIView *animatingView;

@end

@implementation OILoadingIndicatorView

- (id)init {
    self = [super init];
    if (self) {
        // Initialize defaults
        float const kDefaultDiameter = 80.f;
        self.frame = CGRectMake(0, 0, kDefaultDiameter, kDefaultDiameter);
      
        self.animatingView = [[UIView alloc] init];
        self.animatingView.backgroundColor = [UIColor colorWithRed:1 green:0.831 blue:0.247 alpha:1.0];
        [self addSubview:self.animatingView];

        // Register for notifications
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(stopAnimating)
                                                     name:UIApplicationDidEnterBackgroundNotification
                                                   object:nil];
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(startAnimating)
                                                     name:UIApplicationWillEnterForegroundNotification
                                                   object:nil];
    }
    return self;
}

- (void)dealloc {
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)layoutSubviews {
    self.animatingView.frame = CGRectMake(0, 0, 20.0f, 20.0f);
}

- (void)startAnimating {
  [UIView animateWithDuration:10.0
                   animations:^{
                     self.animatingView.frame = CGRectMake(10.0f, 10.0f, 20.0f, 20.0f); // its final location
                   }];
}

@end
