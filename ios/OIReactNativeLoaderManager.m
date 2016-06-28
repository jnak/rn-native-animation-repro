//
//  OIReactNativeLoaderView.m
//  OscarMember
//
//  Created by Suyog Sonwalker on 5/4/16.
//  Copyright © 2016 Oscar. All rights reserved.
//

#import "OIReactNativeLoaderManager.h"
#import "OILoadingIndicatorView.h"

@implementation OIReactNativeLoaderManager

RCT_EXPORT_MODULE(OIReactNativeLoaderManager)

- (UIView *)view {
    OILoadingIndicatorView *spinnerView = [[OILoadingIndicatorView alloc] init];
    [spinnerView startAnimating];
    return spinnerView;
}

//RCT_EXPORT_VIEW_PROPERTY(color, UIColor)

@end
